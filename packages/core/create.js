import { mixins } from "./mixins";
export default function(sfc) {
  sfc.mixins = sfc.mixins || [];
  sfc.mixins.push(mixins);
  return sfc;
}
