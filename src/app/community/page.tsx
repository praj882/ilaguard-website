import CommunityHero from "@/components/community/CommunityHero";
import CommunityBenefits from "@/components/community/CommunityBenefits";
import CommunityForm from "@/components/community/CommunityForm";

export default function CommunityPage() {
  return (
    <main>
      <CommunityHero />
      <CommunityBenefits />
      <CommunityForm />
    </main>
  );
}