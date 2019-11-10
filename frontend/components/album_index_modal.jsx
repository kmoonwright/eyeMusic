import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modal_actions';

import AlbumIndexDetail from './album_index_detail'

class Modal extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let { modal, closeModal } = this.props;

    if (!modal) {
      return null;
    }


    // let component;
    // switch (modal.modal) {
    //   case 'album_songs':
    //     component = <NewPlaylistForm />;
    //     break;
    //   case 'add_to_playlist':
    //     component = <AddSongForm songId={modal.song_id}/>;
    //     break;
    //   default:
    //     return null;
    // }
    // let component;
    // switch (modal.modal) {
    //   case 'new_playlist':
    //     component = <NewPlaylistForm />;
    //     break;
    //   case 'add_to_playlist':
    //     component = <AddSongForm songId={modal.song_id}/>;
    //     break;
    //   case 'user_modal':
    //     component = <UserModal currentUserId={modal.currentUserId} subjectUser={modal.subjectUser}/>;
    //     break;
    //   default:
    //     return null;
    // }


    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
            <div/>
            <p>HELLO THIS IS A TEST</p>
            {/* {component} */}
        </div>
      </div>
    );
  }
}

const msp = state => {
  return {
    modal: state.ui.modal
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(Modal);
