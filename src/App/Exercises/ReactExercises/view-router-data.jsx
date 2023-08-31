import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { Cwiczenie1MetaData } from './Cwiczenie1/router-data';
import { Cwiczenie2MetaData } from './Cwiczenie2/router-data';
import { Cwiczenie3MetaData } from './Cwiczenie3/router-data';
import { IfStatementsMetaData } from './IfStatements/router-data';
import { IfStatementsMoreorLessMetaData } from './IfStatementsMoreorLess/router-data';
import { MoreOrLessGameMetaData } from './MoreOrLessGame/router-data';
import { HitTheMoleMetaData } from './HitTheMole/router-data';
import { MemoGameMetaData } from './MemoGame/router-data';
import { ToDoWithServerMetaData } from './ToDoWithServer/router-data';
import { ReactUseRefMetaData } from './ReactUseRef/router-data';
import { FormsMetaData } from './Forms/router-data';
import { OrderFormMetaData } from './OrderForm/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  Cwiczenie1MetaData,
  Cwiczenie2MetaData,
  Cwiczenie3MetaData,
  IfStatementsMetaData,
  IfStatementsMoreorLessMetaData,
  MoreOrLessGameMetaData,
  HitTheMoleMetaData,
  MemoGameMetaData,
  ToDoWithServerMetaData,
  ReactUseRefMetaData,
  FormsMetaData,
  OrderFormMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
