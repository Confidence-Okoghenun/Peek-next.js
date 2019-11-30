import data from '../../data.json';
export default async function() {
  const labelTemps = data.data.map(i => i.label).filter(i => i != '');
  const label = [];
  labelTemps.forEach(i => (!label.includes(i) ? label.push(i) : undefined));

  return {
    label
  };
}
