fetch('data.json')
  .then(function(data){ return data.json(); })
  .then(function(json) {
    console.log(json);
    const rounds = json.rounds;
    const matches = rounds.map(round => round.matches);
    console.log(matches);
  });
