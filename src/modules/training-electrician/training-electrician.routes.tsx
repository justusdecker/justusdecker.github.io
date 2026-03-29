
import { type RouteObject, Outlet } from 'react-router-dom';
import Header from '../common/header';
import { Summary, SummaryA4Page } from './common/summary';
import { TrainingElecticianMain, TileEntryBuilder } from './training-electrician';

export const trainingElectricianRoutes: RouteObject = {
    path: "/training-electrician",
    element: (
       <>
            <Header />
            <Outlet />
       </> 
    ),
    children: [
        {index: true, element: <TrainingElecticianMain />},
        { path: "weekly-summary", 
          children: [
              { index: true, element: <Summary shortUrl='Elekro-Ausbildung-Lernstoff/main/summary/weekly/' title='Woche-Zusammenfassung' subdir='weekly-summary'/> }, 
              { path: ":id", element: <SummaryA4Page category='summary/weekly' /> }
          ] },
        { path: "monthly-summary", 
          children: [
              { index: true, element: <Summary shortUrl='Elekro-Ausbildung-Lernstoff/main/summary/monthly/' title='Monat-Zusammenfassung' subdir='monthly-summary'/> },
              { path: ":id", element: <SummaryA4Page category='summary/monthly' /> }
          ] },
        { path: "quarterly-summary", 
          children: [
              { index: true, element: <Summary shortUrl='Elekro-Ausbildung-Lernstoff/main/summary/quarterly/' title='Quartal-Zusammenfassung' subdir='quarterly-summary'/> },
              { path: ":id", element: <SummaryA4Page category='summary/quarterly' /> }
          ] },
        { path: "exam-preperation", 
          children: [
              { index: true, element: <Summary shortUrl='Elekro-Ausbildung-Lernstoff/main/summary/exam/' title='Prüfung-Vorbereitung' subdir='exam-preperation'/> },
              { path: ":id", element: <SummaryA4Page category='summary/exam' /> }
          ] },
        { path: "formulars-math", 
          children: [
              { index: true, element: <Summary shortUrl='Elekro-Ausbildung-Lernstoff/main/math/formulars/' title='Matheformeln' subdir='formulars-math'/> },
              { path: ":id", element: <SummaryA4Page category='math/formulars' /> }
          ] },
        { path: "laws", element: <TileEntryBuilder shortUrl='Elekro-Ausbildung-Lernstoff/main/laws.md' /> },
        { path: "glossar", element: <TileEntryBuilder shortUrl='Elekro-Ausbildung-Lernstoff/main/glossar.md'/> }
    ]
};