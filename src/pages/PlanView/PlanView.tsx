import {useState} from 'react';
import {Util} from '@antv/g6'
import {PlanTree} from '../../components/PlanTree/PlanTree';
import mockData from '../../mock/simple.json'
import antvMockData from '../../mock/treeGraph.js'
import { PlanService } from "../../helpers/plan-service"


import type {
    Events,
    IBlocksStats,
    IPlan,
    IPlanContent,
    IPlanStats,
    ITrigger,
    Node,
    Settings,
  } from "../../interfaces"

const config =  {
    padding: [20, 50],
    defaultLevel: 3,
    defaultZoom: 0.8,
    modes: { default: ['zoom-canvas', 'drag-canvas'] },
}

const formatSourceValue = (data: string) => {
    const planService = new PlanService()
    let planJson: IPlanContent
    try {
      planJson = planService.fromSource(data) as IPlanContent
    //   validationMessage.value = ""
    //   setActiveTab("plan")
    } catch (e) {
    //   validationMessage.value = "Couldn't parse plan"
    //   plan.value = undefined
      return
    }
    const node = planJson.Plan
    const plan = planService.createPlan("", planJson, "")

    const content = plan.content
    const planStats: IPlanStats = {
        maxRows: NaN, 
        maxCost: NaN, 
        maxDuration: NaN, 
        maxBlocks: content.maxBlocks || ({} as IBlocksStats)
    }
    planStats.executionTime =
      (content["Execution Time"] as number) ||
      (content["Total Runtime"] as number) ||
      NaN
    planStats.planningTime = (content["Planning Time"] as number) || NaN
    planStats.maxRows = content.maxRows || NaN
    planStats.maxCost = content.maxCost || NaN
    planStats.maxDuration = content.maxDuration || NaN
    planStats.maxBlocks = content.maxBlocks || ({} as IBlocksStats)
    planStats.triggers = content.Triggers || []
    planStats.jitTime =
      (content.JIT && content.JIT.Timing && content.JIT.Timing.Total) || NaN
    planStats.settings = content.Settings as Settings
    plan.planStats = planStats

    return {
        node,
        plan
    }
}

export const PlanView = () => {
    let index = 1;
    const {node, plan} = formatSourceValue(JSON.stringify(mockData))!
    Util.traverseTree(node, (item: { [x: string]: any; label: any; }) => {
        item.label = item['Node Type']
        item.name = item.label
        item.id = `${index++}`
        if(item.Plans) {
            item.children = item.Plans
        }
        return true;
    })
    const treeData = node
    console.log(node)
    console.log(plan)

    return (
        <PlanTree
            /* @ts-ignore */
            treeData={treeData}
            config={config}
            plan={plan}
        />
    );
}