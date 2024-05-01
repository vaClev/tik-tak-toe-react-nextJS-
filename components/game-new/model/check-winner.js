const size = 19; // 19x19     кол-во клеток на поле
const inARow = 5;  //19-5 14  кол-во в ряд для победы

export function checkWinner({cells})
{
    console.log("checkWinner is running");
    for(let i = 0; i < size; i++)
    {
        for(let j = 0; j < size; j++)
        {
            if (cells[getIndexCell(i,j)]!=null)
            {
                let checkIndex=getIndexCell(i,j);
                let checkSimbol=cells[checkIndex];
                let winIndexsRow =[checkIndex];
                let winIndexsCol = [checkIndex];
                let winIndexsD1 =[checkIndex];
                let winIndexsD2 = [checkIndex];
                
                //проверка строки вправо
                if(j <= (size-inARow))
                {
                    for (let k=1; k<inARow;k++)
                    {
                        if(checkSimbol==cells[getIndexCell(i,j+k)])
                        {
                            winIndexsRow.push(getIndexCell(i,j+k));
                        }
                        else {break;}
                    }
                    if (winIndexsRow.length==inARow)
                    {
                        return winIndexsRow;
                    }
                }
                //проверка столбца вниз
                if (i<=(size-inARow))
                {
                    for (let k=1; k<inARow;k++)
                    {
                        if(checkSimbol==cells[getIndexCell(i+k,j)])
                        {
                            winIndexsCol.push(getIndexCell(i+k,j));
                        }
                        else {break;}
                    }
                    if (winIndexsCol.length==inARow)
                    {
                        return winIndexsCol;
                    }
                }
                //проверка диагонали вниз вправо
                if(j <= (size-inARow) && i<=(size-inARow))
                {
                    for (let k=1; k<inARow;k++)
                    {
                        if(checkSimbol==cells[getIndexCell(i+k,j+k)])
                        {
                            winIndexsD1.push(getIndexCell(i+k,j+k));
                        }
                        else {break;}
                    }
                    if (winIndexsD1.length==inARow)
                    {
                        return winIndexsD1;
                    }
                }
                //проверка диагонали вверх вправо
                if(j <= (size-inARow) && i>=inARow-1)
                {
                    for (let k=1; k<inARow;k++)
                    {
                        if(checkSimbol==cells[getIndexCell(i-k,j+k)])
                        {
                            winIndexsD2.push(getIndexCell(i-k,j+k));
                        }
                        else {break;}
                    }
                    if (winIndexsD2.length==inARow)
                    {
                        return winIndexsD2;
                    }
                }
            }
        }
    }
    return undefined;
}

function getIndexCell(i,j)
{
    return i*(size)+j;
}