import Gun from 'gun';
import 'gun/sea';
import { IGunChainReference } from 'gun/types/chain';

interface IGunUser extends IGunChainReference<Record<string, any>, any, false> {
  is: Record<string, any>;
}

export const gun = Gun({
  peers: [`${process.env.REACT_APP_GUN_PEER}`],
});

export const sea = Gun.SEA;

export const user = gun.user() as IGunUser;
