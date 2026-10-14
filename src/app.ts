import { init } from 'launchdarkly-node-server-sdk';

const client = init('sdk-key-placeholder');

export async function useNewCheckout(user: string): Promise<boolean> {
  return client.variation('checkout-v2', { key: user }, false);
}

export async function useDarkMode(user: string): Promise<boolean> {
  return client.variation('dark-mode', { key: user }, false);
}
