const definitions = {
  1: {
    env: process.env.NPM_ETHEREUM_STORE,
    next: process.env.NEXT_PUBLIC_ETHEREUM_STORE,
    fallback: undefined
  },
  3: {
    env: process.env.NPM_ROPSTEN_STORE,
    next: process.env.NEXT_PUBLIC_ROPSTEN_STORE,
    fallback: '0x7f312EFA723c4bC1A9B14FB23E2AEb32ed5DDB32'
  },
  42: {
    env: process.env.NPM_KOVAN_STORE,
    next: process.env.NEXT_PUBLIC_KOVAN_STORE,
    fallback: '0x7f312EFA723c4bC1A9B14FB23E2AEb32ed5DDB32'
  },
  97: {
    env: process.env.NPM_BSC_TESTNET_STORE,
    next: process.env.NEXT_PUBLIC_BSC_TESTNET_STORE,
    fallback: '0x4C12AF706A3831Fa23A03733faffED4159842c63'
  },
  80001: {
    env: process.env.NPM_MUMBAI_STORE,
    next: process.env.NEXT_PUBLIC_MUMBAI_STORE,
    fallback: '0x4C12AF706A3831Fa23A03733faffED4159842c63'
  }
}

export { definitions }
