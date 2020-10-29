import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  adoptRandom = () => {
    const idx = Math.floor(Math.random() * this.props.pets.length);
    const id = this.props.pets[idx].id;

    this.props.onAdoptPet(id);
  };

  // TODO: ADOPT EVERY 5 SECs, CALL adoptRandom()
  componentDidMount() {
    // this.timer = setInterval(() => {
    //   this.adoptRandom();
    // }, 2000);
    setInterval(() => {
      this.adoptRandom();
    }, 2000);
  }

  // TODO: IF ALL PETS ARE ADOPTED, SHOW ALERT "YOU SNOOZE YOU LOSE" JUST ONCE
  componentDidUpdate(prevProps) {
    // if all the pets are adopted show alert
    // if some pets unadopted, don't show alert

    const prevUnadoptedPets = prevProps.pets.filter(pet => !pet.isAdopted);
    const unadoptedPets = this.props.pets.filter(pet => !pet.isAdopted);

    if (!unadoptedPets.length && prevUnadoptedPets.length) {
      alert('You snooze you lose!');
      // clearInterval(this.timer);
    }
  }


  render() {
    // console.log('we are the pets', this.props.pets);
    // const filteredPets = this.props.pets.filter(pet => pet.type === this.props.filter);

    return <div className="ui cards">
      {this.props.pets.map(pet => <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />)}
    </div>
  }
}

export default PetBrowser
