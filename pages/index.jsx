import { Header } from "../components/header";
import { Game } from "../components/game-new";
import { UiTextField } from "../components/uikit/fields/ui-text-field";
import { UiSelectField } from "../components/uikit/fields/ui-select-field";
import { UiSuperSelect } from "../components/uikit/fields/ui-superSelectHEADLESS";

export default function HomePage() {
  return (
    <HomePageLayout header={<Header />}>
      {/* <Game /> */}
      <UiTextField
        label="Email"
        required
        placeholder="example@ascon.ru"
        helperText="Helper text"
        /* errorText="bad" */
      />
      <UiSelectField
        className="mt-1"
        label="Game type"
        required
        helperText="Helper text"
        options={["2 игрока", "4 игрока"]}
      />
    </HomePageLayout>
  );
}

//Компонент композиции
function HomePageLayout({ header, children }) {
  return (
    <div className="bg-slate-50 min-h-screen ">
      {header}
      <main className="pt-6 mx-auto w-max">{children}</main>
    </div>
  );
}
