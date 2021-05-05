class TypeChart {
    CompareTypes(LType, RType) {
        switch (LType) {
            case "Normal":
                switch (RType) {
                    case "Normal":
                        return 1;
                    case "Fighting":
                        return 2;
                    case "Flying":
                        return 1;
                    case "Poison":
                        return 1;
                    case "Ground":
                        return 1;
                    case "Rock":
                        return 1;
                    case "Bug":
                        return 1;
                    case "Ghost":
                        return 0;
                    case "Steel":
                        return 1;
                    case "Fire":
                        return 1;
                    case "Water":
                        return 1;
                    case "Grass":
                        return 1;
                    case "Electric":
                        return 1;
                    case "Psychic":
                        return 1;
                    case "Ice":
                        return 1;
                    case "Dragon":
                        return 1;
                    case "Dark":
                        return 1;
                    case "Fairy":
                        return 1;
                }
                break;
            case "Fighting":
                switch (RType) {
                    case "Normal":
                        return 1;
                    case "Fighting":
                        return 1;
                    case "Flying":
                        return 2;
                    case "Poison":
                        return 1;
                    case "Ground":
                        return 1;
                    case "Rock":
                        return 0.5;
                    case "Bug":
                        return 0.5;
                    case "Ghost":
                        return 1;
                    case "Steel":
                        return 1;
                    case "Fire":
                        return 1;
                    case "Water":
                        return 1;
                    case "Grass":
                        return 1;
                    case "Electric":
                        return 1;
                    case "Psychic":
                        return 2;
                    case "Ice":
                        return 1;
                    case "Dragon":
                        return 1;
                    case "Dark":
                        return 0.5;
                    case "Fairy":
                        return 2;
                }
                break;
            case "Flying":
                switch (RType) {
                    case "Normal":
                        return 1;
                    case "Fighting":
                        return 0.5;
                    case "Flying":
                        return 1;
                    case "Poison":
                        return 1;
                    case "Ground":
                        return 0;
                    case "Rock":
                        return 2;
                    case "Bug":
                        return 0.5;
                    case "Ghost":
                        return 1;
                    case "Steel":
                        return 1;
                    case "Fire":
                        return 1;
                    case "Water":
                        return 1;
                    case "Grass":
                        return 0.5;
                    case "Electric":
                        return 2;
                    case "Psychic":
                        return 1;
                    case "Ice":
                        return 2;
                    case "Dragon":
                        return 1;
                    case "Dark":
                        return 1;
                    case "Fairy":
                        return 1;
                }
                break;
            case "Poison":
                switch (RType) {
                    case "Normal":
                        return 1;
                    case "Fighting":
                        return 0.5;
                    case "Flying":
                        return 1;
                    case "Poison":
                        return 0.5;
                    case "Ground":
                        return 2;
                    case "Rock":
                        return 1;
                    case "Bug":
                        return 0.5;
                    case "Ghost":
                        return 1;
                    case "Steel":
                        return 1;
                    case "Fire":
                        return 1;
                    case "Water":
                        return 1;
                    case "Grass":
                        return 0.5;
                    case "Electric":
                        return 1;
                    case "Psychic":
                        return 2;
                    case "Ice":
                        return 1;
                    case "Dragon":
                        return 1;
                    case "Dark":
                        return 1;
                    case "Fairy":
                        return 0.5;
                }
                break;
            case "Ground":
                switch (RType) {
                    case "Normal":
                        return 1;
                    case "Fighting":
                        return 1;
                    case "Flying":
                        return 1;
                    case "Poison":
                        return 0.5;
                    case "Ground":
                        return 1;
                    case "Rock":
                        return 0.5;
                    case "Bug":
                        return 1;
                    case "Ghost":
                        return 1;
                    case "Steel":
                        return 1;
                    case "Fire":
                        return 1;
                    case "Water":
                        return 2;
                    case "Grass":
                        return 2;
                    case "Electric":
                        return 0;
                    case "Psychic":
                        return 1;
                    case "Ice":
                        return 2;
                    case "Dragon":
                        return 1;
                    case "Dark":
                        return 1;
                    case "Fairy":
                        return 1;
                }
                break;
            case "Rock":
                switch (RType) {
                    case "Normal":
                        return 0.5;
                    case "Fighting":
                        return 2;
                    case "Flying":
                        return 0.5;
                    case "Poison":
                        return 0.5;
                    case "Ground":
                        return 2;
                    case "Rock":
                        return 1;
                    case "Bug":
                        return 1;
                    case "Ghost":
                        return 1;
                    case "Steel":
                        return 2;
                    case "Fire":
                        return 0.5;
                    case "Water":
                        return 2;
                    case "Grass":
                        return 2;
                    case "Electric":
                        return 1;
                    case "Psychic":
                        return 1;
                    case "Ice":
                        return 1;
                    case "Dragon":
                        return 1;
                    case "Dark":
                        return 1;
                    case "Fairy":
                        return 1;
                }
                break;
            case "Bug":
                switch (RType) {
                    case "Normal":
                        return 1;
                    case "Fighting":
                        return 0.5;
                    case "Flying":
                        return 2;
                    case "Poison":
                        return 1;
                    case "Ground":
                        return 0.5;
                    case "Rock":
                        return 2;
                    case "Bug":
                        return 1;
                    case "Ghost":
                        return 1;
                    case "Steel":
                        return 1;
                    case "Fire":
                        return 2;
                    case "Water":
                        return 1;
                    case "Grass":
                        return 0.5;
                    case "Electric":
                        return 1;
                    case "Psychic":
                        return 1;
                    case "Ice":
                        return 1;
                    case "Dragon":
                        return 1;
                    case "Dark":
                        return 1;
                    case "Fairy":
                        return 1;
                }
                break;
            case "Ghost":
                switch (RType) {
                    case "Normal":
                        return 0;
                    case "Fighting":
                        return 0;
                    case "Flying":
                        return 1;
                    case "Poison":
                        return 0.5;
                    case "Ground":
                        return 1;
                    case "Rock":
                        return 1;
                    case "Bug":
                        return 0.5;
                    case "Ghost":
                        return 2;
                    case "Steel":
                        return 1;
                    case "Fire":
                        return 1;
                    case "Water":
                        return 1;
                    case "Grass":
                        return 1;
                    case "Electric":
                        return 1;
                    case "Psychic":
                        return 1;
                    case "Ice":
                        return 1;
                    case "Dragon":
                        return 1;
                    case "Dark":
                        return 2;
                    case "Fairy":
                        return 1;
                }
                break;
            case "Steel":
                switch (RType) {
                    case "Normal":
                        return 0.5;
                    case "Fighting":
                        return 2;
                    case "Flying":
                        return 0.5;
                    case "Poison":
                        return 0;
                    case "Ground":
                        return 2;
                    case "Rock":
                        return 0.5;
                    case "Bug":
                        return 0.5;
                    case "Ghost":
                        return 1;
                    case "Steel":
                        return 0.5;
                    case "Fire":
                        return 2;
                    case "Water":
                        return 1;
                    case "Grass":
                        return 0.5;
                    case "Electric":
                        return 1;
                    case "Psychic":
                        return 0.5;
                    case "Ice":
                        return 0.5;
                    case "Dragon":
                        return 0.5;
                    case "Dark":
                        return 1;
                    case "Fairy":
                        return 0.5;
                }
                break;
            case "Fire":
                switch (RType) {
                    case "Normal":
                        return 1;
                    case "Fighting":
                        return 1;
                    case "Flying":
                        return 1;
                    case "Poison":
                        return 1;
                    case "Ground":
                        return 2;
                    case "Rock":
                        return 2;
                    case "Bug":
                        return 0.5;
                    case "Ghost":
                        return 1;
                    case "Steel":
                        return 0.5;
                    case "Fire":
                        return 0.5;
                    case "Water":
                        return 2;
                    case "Grass":
                        return 0.5;
                    case "Electric":
                        return 1;
                    case "Psychic":
                        return 1;
                    case "Ice":
                        return 0.5;
                    case "Dragon":
                        return 1;
                    case "Dark":
                        return 1;
                    case "Fairy":
                        return 0.5;
                }
                break;
            case "Water":
                switch (RType) {
                    case "Normal":
                        return 1;
                    case "Fighting":
                        return 1;
                    case "Flying":
                        return 1;
                    case "Poison":
                        return 1;
                    case "Ground":
                        return 1;
                    case "Rock":
                        return 1;
                    case "Bug":
                        return 1;
                    case "Ghost":
                        return 1;
                    case "Steel":
                        return 0.5;
                    case "Fire":
                        return 0.5;
                    case "Water":
                        return 0.5;
                    case "Grass":
                        return 2;
                    case "Electric":
                        return 2;
                    case "Psychic":
                        return 1;
                    case "Ice":
                        return 0.5;
                    case "Dragon":
                        return 1;
                    case "Dark":
                        return 1;
                    case "Fairy":
                        return 1;
                }
                break;
            case "Grass":
                switch (RType) {
                    case "Normal":
                        return 1;
                    case "Fighting":
                        return 1;
                    case "Flying":
                        return 2;
                    case "Poison":
                        return 2;
                    case "Ground":
                        return 0.5;
                    case "Rock":
                        return 1;
                    case "Bug":
                        return 2;
                    case "Ghost":
                        return 1;
                    case "Steel":
                        return 1;
                    case "Fire":
                        return 2;
                    case "Water":
                        return 0.5;
                    case "Grass":
                        return 0.5;
                    case "Electric":
                        return 0.5;
                    case "Psychic":
                        return 1;
                    case "Ice":
                        return 2;
                    case "Dragon":
                        return 1;
                    case "Dark":
                        return 1;
                    case "Fairy":
                        return 1;
                }
                break;
            case "Electric":
                switch (RType) {
                    case "Normal":
                        return 1;
                    case "Fighting":
                        return 1;
                    case "Flying":
                        return 0.5;
                    case "Poison":
                        return 1;
                    case "Ground":
                        return 2;
                    case "Rock":
                        return 1;
                    case "Bug":
                        return 1;
                    case "Ghost":
                        return 1;
                    case "Steel":
                        return 0.5;
                    case "Fire":
                        return 1;
                    case "Water":
                        return 1;
                    case "Grass":
                        return 1;
                    case "Electric":
                        return 0.5;
                    case "Psychic":
                        return 1;
                    case "Ice":
                        return 1;
                    case "Dragon":
                        return 1;
                    case "Dark":
                        return 1;
                    case "Fairy":
                        return 1;
                }
                break;
            case "Psychic":
                switch (RType) {
                    case "Normal":
                        return 1;
                    case "Fighting":
                        return 0.5;
                    case "Flying":
                        return 1;
                    case "Poison":
                        return 1;
                    case "Ground":
                        return 1;
                    case "Rock":
                        return 1;
                    case "Bug":
                        return 2;
                    case "Ghost":
                        return 2;
                    case "Steel":
                        return 1;
                    case "Fire":
                        return 1;
                    case "Water":
                        return 1;
                    case "Grass":
                        return 1;
                    case "Electric":
                        return 1;
                    case "Psychic":
                        return 0.5;
                    case "Ice":
                        return 1;
                    case "Dragon":
                        return 1;
                    case "Dark":
                        return 2;
                    case "Fairy":
                        return 1;
                }
                break;
            case "Ice":
                switch (RType) {
                    case "Normal":
                        return 1;
                    case "Fighting":
                        return 2;
                    case "Flying":
                        return 1;
                    case "Poison":
                        return 1;
                    case "Ground":
                        return 1;
                    case "Rock":
                        return 2;
                    case "Bug":
                        return 1;
                    case "Ghost":
                        return 1;
                    case "Steel":
                        return 2;
                    case "Fire":
                        return 2;
                    case "Water":
                        return 1;
                    case "Grass":
                        return 1;
                    case "Electric":
                        return 1;
                    case "Psychic":
                        return 1;
                    case "Ice":
                        return 0.5;
                    case "Dragon":
                        return 1;
                    case "Dark":
                        return 1;
                    case "Fairy":
                        return 1;
                }
                break;
            case "Dragon":
                switch (RType) {
                    case "Normal":
                        return 1;
                    case "Fighting":
                        return 1;
                    case "Flying":
                        return 1;
                    case "Poison":
                        return 1;
                    case "Ground":
                        return 1;
                    case "Rock":
                        return 1;
                    case "Bug":
                        return 1;
                    case "Ghost":
                        return 1;
                    case "Steel":
                        return 1;
                    case "Fire":
                        return 0.5;
                    case "Water":
                        return 0.5;
                    case "Grass":
                        return 0.5;
                    case "Electric":
                        return 0.5;
                    case "Psychic":
                        return 1;
                    case "Ice":
                        return 2;
                    case "Dragon":
                        return 2;
                    case "Dark":
                        return 1;
                    case "Fairy":
                        return 2;
                }
                break;
            case "Dark":
                switch (RType) {
                    case "Normal":
                        return 1;
                    case "Fighting":
                        return 2;
                    case "Flying":
                        return 1;
                    case "Poison":
                        return 1;
                    case "Ground":
                        return 1;
                    case "Rock":
                        return 1;
                    case "Bug":
                        return 2;
                    case "Ghost":
                        return 0.5;
                    case "Steel":
                        return 1;
                    case "Fire":
                        return 1;
                    case "Water":
                        return 1;
                    case "Grass":
                        return 1;
                    case "Electric":
                        return 1;
                    case "Psychic":
                        return 0;
                    case "Ice":
                        return 1;
                    case "Dragon":
                        return 1;
                    case "Dark":
                        return 0.5;
                    case "Fairy":
                        return 2;
                }
                break;
            case "Fairy":
                switch (RType) {
                    case "Normal":
                        return 1;
                    case "Fighting":
                        return 0.5;
                    case "Flying":
                        return 1;
                    case "Poison":
                        return 2;
                    case "Ground":
                        return 1;
                    case "Rock":
                        return 1;
                    case "Bug":
                        return 0.5;
                    case "Ghost":
                        return 1;
                    case "Steel":
                        return 2;
                    case "Fire":
                        return 1;
                    case "Water":
                        return 1;
                    case "Grass":
                        return 1;
                    case "Electric":
                        return 1;
                    case "Psychic":
                        return 1;
                    case "Ice":
                        return 1;
                    case "Dragon":
                        return 0;
                    case "Dark":
                        return 0.5;
                    case "Fairy":
                        return 1;
                }
                break;
        }
    }

    DetermineAdvantage(pokemon1 = null, pokemon2 = null) {
        if (pokemon1 === null) {
            throw "No Pokemon was sent to be tested.";
        }
        if (pokemon2 === null) {
            throw "No Pokemon was sent to be tested.";
        }

        let P1TCount = pokemon1.type.length; //shorthand for Pokemon 1 Type count, to know how many types the first pokemon has.
        let P2TCount = pokemon2.type.length;//shorthand for Pokemon 2 Type count, to know how many types the second pokemon has.

        let Pokemon1AdvantageValue = 1;

        for (let i = 0; i < P1TCount; i++) {
            for (let j = 0; j < P2TCount; j++) {
                Pokemon1AdvantageValue *= this.CompareTypes(pokemon1.type[i], pokemon2.type[j]);
            }
        }

        return Pokemon1AdvantageValue
    }
}