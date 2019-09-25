/**
 * blocks.js Created by sandy on 9/20/2019
 */
import { JsonRpc } from 'eosjs'

const api = new JsonRpc('https://api.eosnewyork.io')

const timeout = ms => new Promise(resolve => setTimeout(resolve, ms))

async function delay (fn, ...args) {
  await timeout(500)
  return fn(...args)
}

const getBlockId = async () => {
  try {
    const blockInfo = await api.get_info()
    return blockInfo.head_block_num
  } catch (err) {
    throw err.message
  }
}

async function getBlockInfo (blockId) {
  try {
    const blocks = await api.get_block(blockId)
    return blocks
  } catch (err) {
    throw err.message
  }
}

export default async function recentTenBlocks (length, cb) {
  while (length--) {
    await delay(async () => {
      let blkId = await getBlockId()
      const block = await getBlockInfo(blkId)
      cb(block)
    })
  }
}

// export default async function recentTenBlocks () {
//   let num = 10
//   const blocks = []
//   while (num--) {
//     await delay(() => {
//       getBlockId().then(bId => {
//         getBlockInfo(bId).then(list => {
//           blocks.push(list)
//         })
//       })
//     })
//   }
//   return blocks
// }
