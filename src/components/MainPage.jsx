import React, { Component } from "react";

class Main extends Component {
    async componentDidMount() {
        const response = await fetch(`https://swapi.dev/api/people`);
        const peopleData = await response.json();
        const peopleResults = peopleData.results;
        this.setState({ people: peopleResults });
    }
    constructor(props) {
        super(props);
        this.state = {
            inputValue: props.value,
            people: [],
            resultPerson: [],
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const inputValue = this.state.inputValue;
        const objPeople = this.state.people;
        const result = objPeople.find(
            (person) => person.name.toLowerCase() === inputValue.toLowerCase()
        );
        this.setState({ resultPerson: result });
    }

    handleOnChange = (e) => {
        this.setState({ inputValue: e.target.value });
    };
    render() {
        return (
            <div className="flex justify-center items-center h-screen ">
                <div className="bg-slate-400 h-auto w-auto rounded-md items-center p-4">
                    <div className="text-2xl text-center mb-2 hover:text-lim duration-300">
                        SistineLove
                    </div>
                    <div className=" flex">
                        <input
                            className="mr-2 rounded-md p-2"
                            onChange={this.handleOnChange}
                            value={this.state.inputValue}
                            placeholder="Введите имя пользователя"
                        ></input>
                        <button onClick={this.handleClick}>
                            Найти пользователя
                        </button>
                    </div>
                    <div>Информация о пользователе: </div>
                    <div className="flex flex-col ">
                        <div className="flex border border-stone-800 rounded-md mb-2  ">
                            <div className="bg-purple-300 mr-3 font rounded-l-lg p-2  w-1/3">
                                name:
                            </div>
                            <div className="flex items-center text-center">
                                {this.state.resultPerson.name}
                            </div>
                        </div>
                        <div className="flex  border border-stone-800 rounded-md mb-2">
                            <div className="bg-purple-300 mr-3 font rounded-l-lg p-2  w-1/3">
                                height:
                            </div>
                            <div className="flex items-center text-center">
                                {this.state.resultPerson.height}
                            </div>
                        </div>
                        <div className="flex border border-stone-800 rounded-md mb-2  ">
                            <div className="bg-purple-300 mr-3 font rounded-l-lg p-2  w-1/3">
                                mass:
                            </div>
                            <div className="flex items-center text-center">
                                {this.state.resultPerson.mass}
                            </div>
                        </div>
                        <div className="flex  border border-stone-800 rounded-md mb-2">
                            <div className="bg-purple-300 mr-3 font rounded-l-lg p-2  w-1/3">
                                hair_color:
                            </div>
                            <div className="flex items-center">
                                {this.state.resultPerson.hair_color}
                            </div>
                        </div>
                        <div className="flex border border-stone-800 rounded-md mb-2  ">
                            <div className="bg-purple-300 mr-3 font rounded-l-lg p-2  w-1/3">
                                skin_color:
                            </div>
                            <div className="flex items-center text-center">
                                {this.state.resultPerson.skin_color}
                            </div>
                        </div>
                        <div className="flex  border border-stone-800 rounded-md mb-2">
                            <div className="bg-purple-300 mr-3 font rounded-l-lg p-2  w-1/3">
                                eye_color:
                            </div>
                            <div className="flex items-center text-center">
                                {this.state.resultPerson.eye_color}
                            </div>
                        </div>

                        <div className="flex  border border-stone-800 rounded-md mb-2">
                            <div className="bg-purple-300 mr-3 font rounded-l-lg p-2  w-1/3">
                                birth_year:
                            </div>
                            <div className="flex items-center text-center">
                                {this.state.resultPerson.birth_year}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
