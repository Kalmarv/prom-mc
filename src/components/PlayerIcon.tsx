import { useEffect, useState } from 'react'

const getPlayerUUID = async (player: string) => {
  const res = await fetch(
    `https://corsproxy.io/?https://api.mojang.com/users/profiles/minecraft/${player}`
  )
  const data = await res.json()

  return data.id
}

const PlayerIcon: React.FC<{ player: string }> = ({ player }) => {
  const [uuid, setUUID] = useState()

  useEffect(() => {
    const getUUID = async () => {
      const res: any = await getPlayerUUID(player)
      setUUID(res)
    }
    getUUID()
  }, [player])

  return <>{uuid && <img src={`https://crafatar.com/avatars/${uuid}`}></img>}</>
}

export default PlayerIcon
