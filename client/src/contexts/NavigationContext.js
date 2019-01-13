import React, { createContext } from 'react';

const Context = createContext();

class NavigationContext extends React.Component {
  static Consumer = Context.Consumer;
  static Provider = Context.Provider;

  constructor(props, context) {
    super(props, context);

    this.state = {
      showFavorites: false,
      isAdding: false,
      isPreviewing: false,
      isDeleting: null
    }
  }

  toggleFavorites = () => this.setState({ showFavorites: !this.state.showFavorites });
  
  openAddingModal = () => this.setState({ isAdding: true });
  closeAddingModal = () => this.setState({ isAdding: false });

  openDeleteModal = contact => this.setState({ isDeleting: contact });
  closeDeleteModal = () => this.setState({ isDeleting: null });

  render() {
    const { children } = this.props;
    const contextValue = {
      state: { ...this.state },
      actions: {
        toggleFavorites: this.toggleFavorites,
        openAddingModal: this.openAddingModal,
        closeAddingModal: this.closeAddingModal,
        openDeleteModal: this.openDeleteModal,
        closeDeleteModal: this.closeDeleteModal
      }
    }

    return (
      <NavigationContext.Provider value={contextValue}>
        {children}
      </NavigationContext.Provider>
    );
  }
}

export default NavigationContext;
