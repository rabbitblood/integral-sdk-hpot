import { ChainId } from "./chainIds"

export const POOL_DEPLOYER_ADDRESSES = {
    [ChainId.XLayer]: '0xEC250E6856e14A494cb1f0abC61d72348c79F418',
    [ChainId.XLayerTestnet]: '0xEC250E6856e14A494cb1f0abC61d72348c79F418',
    [ChainId.SonicTestnet]: '0x38A5C36FA8c8c9E4649b51FCD61810B14e7ce047'
}

export const POOL_INIT_CODE_HASH = {
    [ChainId.XLayer]: '0xf96d2474815c32e070cd63233f06af5413efc5dcb430aee4ff18cc29007c562d',
    [ChainId.XLayerTestnet]: '0xf96d2474815c32e070cd63233f06af5413efc5dcb430aee4ff18cc29007c562d',
    [ChainId.SonicTestnet]: '0xf96d2474815c32e070cd63233f06af5413efc5dcb430aee4ff18cc29007c562d'
}