import { Container, DietStatus, DietText } from "./styles"

type DietStatusCardProps = {
  variant: 'PRIMARY' | 'SECONDARY'
  title: string
}

export function DietStatusCard({ variant, title }: DietStatusCardProps) {
  return(
    <Container>
      <DietStatus variant={variant}/>

      <DietText>{title}</DietText>
    </Container>
  )
}