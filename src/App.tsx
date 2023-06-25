import PromBarGraph from './components/PromBarGraph'

const App = () => {
  return (
    <>
      <div className='flex flex-row justify-center'>
        <div className='flex flex-col w-full max-w-3xl'>
          <PromBarGraph
            query='sum(blocks_mined) by (player)'
            label='Blocks Mined'
            suffix='Blocks'
          />
          <PromBarGraph
            query='sum(blocks_crafted) by (player)'
            label='Items Crafted'
            suffix='Items'
          />
          <PromBarGraph
            query='sum(blocks_picked_up) by (player)'
            label='Items Collected'
            suffix='Blocks'
          />
          <PromBarGraph
            query='sum(damage_dealt) by (player)'
            label='Damage Dealt'
            suffix='Damage'
          />
          <PromBarGraph
            query='sum(damage_taken) by (player)'
            label='Damage Taken'
            suffix='Damage'
          />
          <PromBarGraph
            query='sum(entities_killed) by (player)'
            label='Mobs Killed'
            suffix='Mobs'
          />
          <PromBarGraph query='sum(player_deaths) by (player)' label='Deaths' suffix='Deaths' />
          <PromBarGraph query='sum(player_jumps) by (player)' label='Jumps' suffix='Jumps' />
          <PromBarGraph
            query='sum(player_playtime) by (player)'
            label='Time Played'
            multiply={0.0000138889}
            suffix='Hours'
          />
          <PromBarGraph
            query='sum(player_used_crafting_table) by (player)'
            label='Crafting Table Uses'
            suffix='Uses'
          />
          <PromBarGraph
            query='sum(cm_traveled) by (player)'
            label='Distance Traveled'
            suffix='Km'
            multiply={0.00001}
            toFixed={2}
          />
        </div>
      </div>
    </>
  )
}

export default App
