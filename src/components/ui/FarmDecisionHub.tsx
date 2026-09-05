import CropAdvisorCard from "@/components/ui/CropAdvisorCard";
import MandiPriceCard from "@/components/ui/MandiPriceCard";
import CropVarietyCard from "@/components/ui/CropVarietyCard";

export default function FarmDecisionHub() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-6 lg:grid-cols-2">
		  <MandiPriceCard />
		  <CropAdvisorCard />
        </div>
      </div>
    </section>
  );
}