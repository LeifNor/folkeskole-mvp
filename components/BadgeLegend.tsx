import Badge from './Badge'

export default function BadgeLegend() {
  return (
    <div className="flex flex-wrap items-center gap-3 text-sm">
      <Badge variant="new">NYT</Badge>
      <Badge variant="change">ÆNDRES</Badge>
      <Badge variant="stop">OPHØRER</Badge>
      <Badge variant="info">INFO</Badge>
    </div>
  )
}
