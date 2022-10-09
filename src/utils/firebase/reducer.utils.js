
// function takes Action with Payload and only Action as input//
export function createAction (type, payload) {
  return { type, payload };
}
