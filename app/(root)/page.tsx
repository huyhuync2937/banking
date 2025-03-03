import HeaderBox from "@/components/HeaderBox";
import TotalbalanceBox from "@/components/TotalBalanceBox";
import { redirect } from "next/navigation";

export default async function Home() {
  const loggedIn = { firstName: "Adrian" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account"
          />
          <TotalbalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
          />
        </header>
      </div>
    </section>
  );
}
