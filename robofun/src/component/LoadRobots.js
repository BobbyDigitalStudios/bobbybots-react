import React, { Component } from 'react'
import Search from './Search'
// import axios from 'axios'

export class LoadRobots extends Component {

  state = {
    // robotFact: [],
    robotFacts: [
      {
        "name": "Anne Droid",
        "id": "f9c773bb-525f-4134-8c26-70072bdde025",
        "score": 3142,
        "image": "Anne Droid.png",
        "categories": ["Category A", "Category B", "Prototype", "Droid"]
      }, {
        "name": "Rob Bot",
        "id": "427e371d-e976-4b1f-9c49-1e7dfb7239c1",
        "score": 5434,
        "image": "Rob Bot.png",
        "categories": ["Prototype", "Cyborg"]
      }, {
        "name": "Waste Disposal Automator",
        "id": "4803a371-15b2-4d54-ab3e-5df73f78688a",
        "score": 314,
        "image": "Waste Disposal Automator.png",
        "categories": ["Prototype", "Category A"]
      }, {
        "name": "Bitbot",
        "id": "35f06fae-10e6-42b1-98ef-c7c217b20bf7",
        "score": 1698,
        "image": "Bitbot.png",
        "categories": ["Cyborg", "Category C"]
      }, {
        "name": "D.O.T.B.O.T",
        "id": "419748bb-f551-4e6f-bfd4-7442a544a28e",
        "score": 7365,
        "image": "D.O.T.B.O.T.png",
        "categories": ["Prototype", "Droid", "Cyborg", "Category A"]
      }, {
        "name": "Sparky",
        "id": "3f4ebd04-1703-416f-862f-b5a297b82212",
        "score": 9306,
        "image": "Sparky.png",
        "categories": ["Category B", "Prototype", "Category A"]
      }, {
        "name": "PING",
        "id": "bebcbb2f-f616-431c-9e48-7d8c9bdadbe7",
        "score": 6865,
        "image": "PING.png",
        "categories": ["Droid", "Prototype"]
      }, {
        "name": "PONG",
        "id": "a1687843-1383-4f7e-9279-536aa2b0f9a8",
        "score": 2035,
        "image": "PONG.png",
        "categories": ["Category B", "Droid", "Cyborg", "Category A"]
      }, {
        "name": "War Cyborg",
        "id": "8880fe9c-2550-408f-a3c6-464ef4283fd6",
        "score": 3008,
        "image": "War Cyborg.png",
        "categories": ["Category B", "Category A", "Cyborg"]
      }, {
        "name": "Defence Drone",
        "id": "071227f3-af6d-440b-9062-bb41e0bc8ade",
        "score": 211,
        "image": "Defence Drone.png",
        "categories": ["Cyborg", "Category C"]
      }, {
        "name": "Battle Bot",
        "id": "dcf6bba6-862c-4181-8164-695fa2574fe0",
        "score": 9636,
        "image": "Battle Bot.png",
        "categories": ["Category C", "Droid"]
      }, {
        "name": "Main Animal Handling",
        "id": "f95479bc-5cf3-460c-9cec-69a58e4c8b63",
        "score": 760,
        "image": "Main Animal Handling.png",
        "categories": []
      }, {
        "name": "Expedition Cyborg",
        "id": "0ff97950-24da-48ba-af37-1e1cd8beca53",
        "score": 2160,
        "image": "Expedition Cyborg.png",
        "categories": ["Droid", "Category A"]
      }, {
        "name": "Plex",
        "id": "658f61c9-ae5c-44c5-97a0-e98c7ecac2f7",
        "score": 775,
        "image": "Plex.png",
        "categories": ["Cyborg", "Category A", "Category B"]
      }, {
        "name": "Integrated Travel Droid",
        "id": "29562855-e809-4cd4-a256-8138d71900f6",
        "score": 3135,
        "image": "Integrated Travel Droid.png",
        "categories": ["Droid"]
      }, {
        "name": "Juggernaut",
        "id": "e8bdbdf8-a16e-40f9-b253-bf02c3d2ea60",
        "score": 1987,
        "image": "Juggernaut.png",
        "categories": ["Prototype"]
      }, {
        "name": "Dustie",
        "id": "2be611de-7719-4281-8481-5f140e9ae0d0",
        "score": 5469,
        "image": "Dustie.png",
        "categories": ["Droid", "Category A"]
      }, {
        "name": "AUTO",
        "id": "6b981133-bb0e-4d82-acab-b36d4eb8a76d",
        "score": 502,
        "image": "AUTO.png",
        "categories": ["Category B"]
      }, {
        "name": "uh-oh",
        "id": "735200ff-f6d3-4e9b-9295-abaf912bf917",
        "score": 6065,
        "image": "uh-oh.png",
        "categories": ["Prototype"]
      }, {
        "name": "Bionic Servant",
        "id": "c41e0f6e-0fc9-47cb-aee3-7df62e6462c3",
        "score": 4508,
        "image": "Bionic Servant.png",
        "categories": ["Category B", "Category A", "Cyborg"]
      }, {
        "name": "Spirit",
        "id": "a506ce91-0b30-4e6d-a25b-7b2caf60a8ff",
        "score": 7753,
        "image": "Spirit.png",
        "categories": ["Droid", "Cyborg", "Category C", "Category A"]
      }, {
        "name": "g4sp3d4l",
        "id": "0171ae38-f980-4522-a0a1-7343a4f4460a",
        "score": 3584,
        "image": "g4sp3d4l.png",
        "categories": ["Prototype", "Category B", "Droid"]
      }, {
        "name": "TEMPO",
        "id": "88eecdf5-b6f6-4044-89b5-c1dd1ff51eb4",
        "score": 2697,
        "image": "TEMPO.png",
        "categories": ["Cyborg", "Category C", "Prototype"]
      }, {
        "name": "Bodyguard Prototype",
        "id": "2830e003-2b72-4ca3-b769-64d24313a414",
        "score": 64,
        "image": "Bodyguard Prototype.png",
        "categories": ["Prototype", "Category A", "Category B"]
      }, {
        "name": "diff",
        "id": "053f150d-e7a0-4f4c-a226-32b16474a13b",
        "score": 5252,
        "image": "diff.png",
        "categories": ["Category A", "Category B", "Droid"]
      }, {
        "name": "Andromeda",
        "id": "df1c86e3-1e52-4cb6-ae34-5786474e6498",
        "score": 7959,
        "image": "Andromeda.png",
        "categories": []
      }
    ],
    robotIMG: 'https://bobby-testing.s3.eu-north-1.amazonaws.com/bobbybots/img/',
    counter: 1,
    search: ''
  }

  // componentDidMount() {
  //   axios.get('https://bobby-testing.s3.eu-north-1.amazonaws.com/bobbybots/bots.json')
  //     .then(res => this.setState({ robotFact: res.data }))
  // }

  renderRobots() {
    if (this.state.robotFacts.length === 0) {
      return <p>Computer says: NO (robots...)</p>
    } else {
      return <ul>
        <Search />
        {
          this.state.robotFacts.map(robot =>
            <div className="card" key={robot.id}>
              <img style={robotStyles.img} src={this.state.robotIMG + robot.image} alt="robot" />
              <div className="info-text">
                <h5>{robot.name}</h5>
                <p style={robotStyles.p}>{robot.categories} </p>
              </div>
              <h6 style={robotStyles.h6}>{robot.score} </h6>
            </div>)
        }
      </ul>
    }
  }
  render() {


    return (
      <div>
        {this.renderRobots()}
      </div>
    )
  }
}

const robotStyles = {

  img: {
    alignSelf: 'center',
    margin: '1rem',
    border: '1px solid #82a5ab',
    borderRadius: '50%',
    background: '#fff',
    height: '50px'
  },
  h5: {
    fontSize: '1rem'
  },
  h6: {
    justifyContent: 'flex-end',
    fontSize: '1rem',
  },
  p: {
    fontSize: '.8rem'
  }
}

export default LoadRobots
