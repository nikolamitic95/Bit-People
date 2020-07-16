import React from 'react';
import style from './HomePage.module.css';

import { fetchUsers } from '../../services/userService';
import { storageService } from '../../services/storageService';
import { search } from '../../shared/utilities';
import { Header } from '../Header/Header';
import { Users } from './Users/Users';
import { Footer } from '../Footer/Footer';
import { Search } from './Search/Search';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.onLayoutChange = this.onLayoutChange.bind(this);
        this.state = {
            isListView: true,
            users: [],
            filteredUsers: [],
            isLoading: false,
            timeAgo: ""
        }
    }

    componentDidMount() {
        const savedUsers = storageService.get("users");
        const viewMode = storageService.get("isListView");
        if (!savedUsers) {
            this.getUsers()
        } else {
            this.setState({
                users: savedUsers,
                filteredUsers: savedUsers
            })
            this.setState({ isListView: JSON.parse(viewMode) })
        }

    }

    getUsers = () => {
        this.setState({ isLoading: true });

        fetchUsers()
            .then(data => {
                this.setState({ users: data, filteredUsers: data, inputValue: '', timeAgo: new Date() },
                    () => {
                        storageService.set("users", data)
                    })
            })
            .finally(() => this.setState({ isLoading: false }));
    }

    searchedUsers = (textInput) => {
        const res = search(this.state.users, ['firstName', 'lastName'], textInput)
        this.setState({ filteredUsers: res })
    }

    onLayoutChange() {
        this.setState({ isListView: !this.state.isListView },
            () => {
                storageService.set("isListView", this.state.isListView)
            })
    }

    render() {

        return (
            <div className={style.home}>
                <div className={style.content}>
                    <Header
                        isHomePage={true}
                        isList={this.state.isListView}
                        onLayoutChange={this.onLayoutChange}
                        updateUsers={() => this.getUsers()}
                    />

                    <Search
                        searchedUsers={this.searchedUsers} />

                    <Users
                        isList={this.state.isListView}
                        users={this.state.filteredUsers}
                        isLoading={this.state.isLoading} />
                </div>
                <Footer time={this.state.timeAgo} />
            </div >
        );
    }
}

export { HomePage };