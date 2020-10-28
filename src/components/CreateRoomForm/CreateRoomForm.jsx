import React, {Component} from 'react';

class CreateRoomForm extends Component {
    state = {
        invalidForm: true,
        formData: {
            owner: '',
            members: [],
            title: '',
            type: ''
        }
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleCreateRoom(this.state.formData)
    }

    handleChange = e => {
        const formData = {...this.state.formData,
        [e.target.name]: e.target.value
    };
    this.setState({
        formData,
        invalidForm: !this.formRef.current.checkValidity()
    });
};

render() {
    return (
        <>
            <div>
                <form ref={this.formRef} onSubmit={this.handleSubmit}>

                        <div>
                            <input
                                className="form-control"
                                name="owner"
                                value={this.state.formData.owner}
                                onChange={this.handleChange}
                                required
                                placeholder="Owner"
                            />
                            <input
                                className="form-control"
                                name="members"
                                value={this.state.formData.members}
                                onChange={this.handleChange}
                                placeholder="Members"
                            />
                            <input
                                className="form-control"
                                name="title"
                                value={this.state.formData.title}
                                onChange={this.handleChange}
                                required
                                placeholder="Title"
                            />
                            <input
                                className="form-control"
                                name="type"
                                value={this.state.formData.type}
                                onChange={this.handleChange}
                                required
                                placeholder="Type"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={this.state.invalidForm}
                            >
                                Create Room

                            </button>
                        </div>
                </form>
            </div>
        </>
    )
}

}

export default CreateRoomForm;