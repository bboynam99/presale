export const EPOCH_INTERVAL = 9600;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 3;

interface IAddresses {
  [key: number]: { [key: string]: string };
}
export const addresses: IAddresses = {
  56: {
    BUSD_ADDRESS: "0x55d398326f99059ff775485246999027b3197955",   // USDT
    TOKEN_ADDRESS: "0x85a91eF51Cb675EB08be0c79267D7C5D448a7bb5", // TICKET
    PRESALE_ADDRESS: "0x905aF8C2b4e21536F824F8987830D54Aee0881a7"
  },
};
