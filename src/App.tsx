import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";

function App() {
  return (
    <Section>
      <Container>
        <SectionHeading
          title="Hello"
          description="Testing our design system."
        />
      </Container>
    </Section>
  );
}

export default App;