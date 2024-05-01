import { MOVE_ORDER } from "../constants.js";
export function getNextMove({playersCount, currentMove, timers}) {

    //обрежем массив по кол-ву игроков и профильтруем по тем кого нет в списке выбывших
    const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount).filter(symbol=>timers[symbol]>0); 
    //

    const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;
    return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];
}