import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Dashboard.scss';
import {
  addDataToAPI, deleteDataAPI, getDataFromAPI, updateDataToAPI,
} from '../../../config/redux/action';

class Dashboard extends Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
      title: '',
      content: '',
      textButton: 'SIMPAN',
      buttonClear: false,
      noteId: '',
    }

    componentDidMount() {
      const { getNotes } = this.props;
      const userData = JSON.parse(localStorage.getItem('userData'));
      getNotes(userData.uid);
      // const userData = localStorage.getItem('userData')
      // console.log('Dashboard: ', JSON.parse(userData))
    }

    // getDataFirebase = () => {
    //     const starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
    // }

    handleSaveNotes = () => {
      const {
        title, content, textButton, noteId,
      } = this.state;

      const { saveNotes, updateNotes } = this.props;
      const userData = JSON.parse(localStorage.getItem('userData'));

      const data = {
        title,
        content,
        date: new Date().getTime(),
        userId: userData.uid,
      };

      if (textButton === 'SIMPAN') {
        saveNotes(data);
      } else {
        data.noteId = noteId;
        updateNotes(data);
        this.setState({
          title: '',
          content: '',
          textButton: 'SIMPAN',
          buttonClear: false,
        });
      }

      console.log(data);
    }

    onInputChange = (e, type) => {
      this.setState({
        [type]: e.target.value,
      });
    }

    updateNotes = (note) => {
      console.log(note);
      this.setState({
        title: note.data.title,
        content: note.data.content,
        textButton: 'UPDATE',
        buttonClear: true,
        noteId: note.id,
      });
    }

    handleClearButton = () => {
      this.setState({
        title: '',
        content: '',
        textButton: 'SIMPAN',
        buttonClear: false,
      });
    }

    deleteNotes = (e, note) => {
      const { deleteNotes } = this.props;
      e.stopPropagation();
      const userData = JSON.parse(localStorage.getItem('userData'));
      const data = {
        noteId: note.id,
        userId: userData.uid,
      };
      deleteNotes(data);
      // this.setState({
      //     title: '',
      //     content: '',
      //     textButton: 'SIMPAN',
      //     buttonClear: false
      // })
    }

    render() {
      const {
        title, content, textButton, buttonClear,
      } = this.state;
      const { updateNotes, handleSaveNotes, deleteNotes } = this;
      const { notes } = this.props;
      // console.log('notes:', this.props.notes)
      return (
        <div className="container">
          <div className="input-form">
            <input
              type="text"
              placeholder="title"
              className="input-title"
              value={title}
              onChange={(e) => this.onInputChange(e, 'title')}
            />
            <textarea
              placeholder="content"
              className="text-area"
              value={content}
              onChange={(e) => this.onInputChange(e, 'content')}
            />
            <br />
            <br />
            <div className="action-wrapper">
              <button type="button" className="save-btn" onClick={handleSaveNotes}>{textButton}</button>
              <br />
              {
                // eslint-disable-next-line react/button-has-type
                buttonClear && <button className="save-btn cancel" onClick={this.handleClearButton}>CANCEl</button>
              }
            </div>
          </div>
          <br />
          <br />
          {
                    notes.length > 0 ? (
                      <>
                        {
                                notes.map((note) => (
                                  <div className="card" key={note.id} onClick={() => updateNotes(note)} aria-hidden="true">
                                    <p>{note.data.title}</p>
                                    <p>{note.data.date}</p>
                                    <p>{note.data.content}</p>
                                    <button type="button" className="delete" onClick={(e) => deleteNotes(e, note)}>DELETE</button>
                                  </div>
                                ))
                            }
                      </>
                    ) : null
                }
        </div>
      );
    }
}

const reduxState = (state) => ({
  userData: state.user,
  notes: state.notes,
});

const reduxDispatch = (dispatch) => ({
  saveNotes: (data) => dispatch(addDataToAPI(data)),
  getNotes: (data) => dispatch(getDataFromAPI(data)),
  updateNotes: (data) => dispatch(updateDataToAPI(data)),
  deleteNotes: (data) => dispatch(deleteDataAPI(data)),
});

export default connect(reduxState, reduxDispatch)(Dashboard);
