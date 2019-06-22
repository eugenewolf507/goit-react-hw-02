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

    if (name === 'backwards') this.backwardsPublication();
    if (name === 'forward') this.forwardPublication();
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      forwardButtonDisabled: prevState.forwardButtonDisabled - prevState.value,
    }));
  };

  render() {
    const { publicationId } = this.state;
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
          publicationId={publicationId}
          arrayLength={items.length}
        />
      </div>
    );
  }
}

export default Reader;
