import React, { Component } from 'react';
import { fetchQuery } from './api';
import toast, { Toaster } from 'react-hot-toast';
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";


export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const value = evt.target.elements.query.value.trim();

    if (!value) {
      toast.error('Pleas, enter a request!');
      return;
    }

    this.setState({
      query: `${Date.now()}/${value}`,
      images: [],
      page: 1,
    });
    evt.target.reset();
  };

async componentDidUpdate(prevProps, prevState) {

  const { query, page} = this.state
    
    if(prevState.query !== query ||
      prevState.page !== page) {
        try {
          const currentQuery = query.slice(14);

          const { hits } = await fetchQuery(currentQuery, page);
          console.log(hits);

        if(!hits) {
          toast.error(
            'Sorry, there is no image for your search query, please try again!'
          );
        } else {
          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
          }));
        }
        } catch (error) {
          toast.error('Sorry, something went wrong, please try again!');
        }
    }

  
  }

  render() {
    return (
      <div>
      <Searchbar onSubmit={this.handleSubmit}/>
      <section>
      <ImageGallery images={this.state.images}/>
      </section>
      
      <Toaster/>
    </div>
    )
  }

}
