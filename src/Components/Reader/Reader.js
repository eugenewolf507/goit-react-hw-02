import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';
import Controls from './Controls/Controls';
import Counter from './Counter/Counter';
import Publication from './Publication/Publication';

class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string,
      }).isRequired,
    ).isRequired,
  };

  state = {
    publicationId: 0,
    bacwardsButtonDisabled: true,
    forwardButtonDisabled: false,
  };

  backwardsPublication = () =>
    this.setState(prevState => ({
      publicationId: prevState.publicationId - 1,
    }));

  forwardPublication = () =>
    this.setState(prevState => ({
      publicationId: prevState.publicationId + 1,
    }));

  handleControl = ({ target }) => {
    const { name } = target;
    const { publicationId } = this.state;
    const { items } = this.props;
    if (name === 'backwards' && publicationId > 0) {
      this.backwardsPublication();
      this.setState({ forwardButtonDisabled: false });
    }
    if (name === 'backwards' && publicationId === 1) {
      this.setState({ bacwardsButtonDisabled: true });
    }
    if (name === 'forward' && publicationId < items.length - 1) {
      this.forwardPublication();
      this.setState({ bacwardsButtonDisabled: false });
    }
    if (name === 'forward' && publicationId === items.length - 2) {
      this.setState({ forwardButtonDisabled: true });
    }
  };

  render() {
    const {
      publicationId,
      bacwardsButtonDisabled,
      forwardButtonDisabled,
    } = this.state;
    const { items } = this.props;
    return (
      <div className={styles.reader}>
        <Publication {...items[publicationId]} />
        <Counter
          arrayLength={items.length}
          publicationNumber={publicationId + 1}
        />
        <Controls
          changePublication={this.handleControl}
          bacwardsDisabled={bacwardsButtonDisabled}
          forwardDisabled={forwardButtonDisabled}
        />
      </div>
    );
  }
}

export default Reader;
