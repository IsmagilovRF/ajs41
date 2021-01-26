// TODO: write your code here
export default function characterStatus(character) {
  let status = '';

  if (character.health > 50) {
    status = 'healthy';
  } else if (character.health > 14 && character.health < 51) {
    status = 'wounded';
  } else if (character.health < 15) {
    status = 'critical';
  }
  return status;
}
