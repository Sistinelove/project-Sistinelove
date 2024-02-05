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
        const result = objPeople.find((person) => person.name.toLowerCase() === inputValue.toLowerCase());
        this.setState({ resultPerson: result });
    }

    handleOnChange = (e) => {
        this.setState({ inputValue: e.target.value });
    };
    render() {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="bg-slate-400 h-56 w-auto rounded-md items-center">
                    <div className="text-2xl text-center">SistineLove</div>
                    <div className="flex-col flex">
                        <input
                            onChange={this.handleOnChange}
                            value={this.state.inputValue}
                            placeholder="Введите имя пользователя"
                        ></input>
                        <button onClick={this.handleClick}>
                            Нажим на меня
                        </button>
                    </div>
                    <div>Вывод данных пользователя</div>
                    <div className="flex flex-col">
                        {
                            this.state.resultPerson((element,i)=>(
                                <div className="flex">
                                    <div></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
