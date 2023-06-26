import PromBarGraph from './components/PromBarGraph'

const App = () => {
  return (
    <>
      <div className='flex flex-row justify-center'>
        <div className='flex flex-col w-full max-w-3xl'>
          <h1 className='text-center p-14 font-bold text-2xl text-accent'>
            Minecraft Player Stats
          </h1>
          <PromBarGraph
            query='sum(blocks_mined) by (player)'
            label='Blocks Mined'
            suffix='Blocks'
            metric='player'
          />
          <PromBarGraph
            query='sum(blocks_crafted) by (player)'
            label='Items Crafted'
            suffix='Items'
            metric='player'
          />
          <PromBarGraph
            query='sum(blocks_picked_up) by (player)'
            label='Items Collected'
            suffix='Blocks'
            metric='player'
          />
          <PromBarGraph
            query='sum(damage_dealt) by (player)'
            label='Damage Dealt'
            suffix='Damage'
            metric='player'
          />
          <PromBarGraph
            query='sum(damage_taken) by (player)'
            label='Damage Taken'
            suffix='Damage'
            metric='player'
          />
          <PromBarGraph
            query='sum(entities_killed) by (player)'
            label='Mobs Killed'
            suffix='Mobs'
            metric='player'
          />
          <PromBarGraph
            query='sum(player_deaths) by (player)'
            label='Deaths'
            suffix='Deaths'
            metric='player'
          />
          <PromBarGraph
            query='sum(player_jumps) by (player)'
            label='Jumps'
            suffix='Jumps'
            metric='player'
          />
          <PromBarGraph
            query='sum(player_playtime) by (player)'
            label='Time Played'
            multiply={0.0000138889}
            suffix='Hours'
            metric='player'
          />
          <PromBarGraph
            query='sum(player_used_crafting_table) by (player)'
            label='Crafting Table Uses'
            metric='player'
            suffix='Uses'
          />
          <PromBarGraph
            query='sum(cm_traveled) by (player)'
            label='Distance Traveled'
            suffix='Km'
            multiply={0.00001}
            toFixed={2}
            metric='player'
          />
          <PromBarGraph
            query='sum(blocks_mined) by (block)'
            label='Top Blocks Mined'
            suffix='mined'
            metric='block'
            addIcon={false}
          />
          <PromBarGraph
            query='sum(blocks_crafted) by (block)'
            label='Top Items Crafted'
            suffix='crafted'
            metric='block'
            addIcon={false}
          />
          <PromBarGraph
            query='sum(entities_killed) by (entity)'
            label='Top Mobs Killed'
            suffix='killed'
            metric='entity'
            addIcon={false}
          />
        </div>
      </div>
    </>
  )
}

export default App
