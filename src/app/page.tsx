import SpellCard from "@/components/spellCard";
import testdata from "@/db/testdata";

export default function Home() {
  
  return (
    <main>
      <SpellCard {...testdata}/>
    </main>
  );
}
