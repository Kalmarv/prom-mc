import PromBarGraph from './components/PromBarGraph'

const App = () => {
  return (
    <>
      <PromBarGraph query='sum(blocks_mined) by (player)' label='Blocks Mined' />
      <PromBarGraph query='sum(blocks_crafted) by (player)' label='Items Crafted' />
      <PromBarGraph query='sum(blocks_picked_up) by (player)' label='Items Collected' />
      <PromBarGraph query='sum(damage_dealt) by (player)' label='Damage Dealt' />
      <PromBarGraph query='sum(damage_taken) by (player)' label='Damage Taken' />
      <PromBarGraph query='sum(entities_killed) by (player)' label='Mobs Killed' />
      <PromBarGraph query='sum(player_deaths) by (player)' label='Deaths' />
      <PromBarGraph query='sum(player_jumps) by (player)' label='Jumps' />
      <PromBarGraph query='sum(player_playtime) by (player)' label='Time Played' />
      <PromBarGraph
        query='sum(player_used_crafting_table) by (player)'
        label='Crafting Table Uses'
      />
      <PromBarGraph query='sum(cm_traveled) by (player)' label='Distance Traveled' />
    </>
  )
}

export default App
