import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Repo from './Repo';
import RepoList from '../components/RepoList';

export default function GitHubTrending() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    let isMounted = true;               // note mutable flag
    console.log('isMounted', isMounted);
    const apiHost = 'https://codexp.io/api'
    const url = `${apiHost}/gh-trending?lang=all&date=2021-08-08`

    axios.get(url)
      .then((resp) => {
        const items = resp.data;
        if (isMounted) {
          console.log('isMounted', isMounted);
          setRepos(items);
        }
      })
      .catch(error => {
        console.error(error);
      });
    return () => { isMounted = false }; // cleanup toggles value, if unmounted
  }, []);

  return (
    <div className={'repos'}>
      <RepoList></RepoList>
      <h1>Github Trending</h1>
      {
        repos.map((repo) => {
          return <Repo key={repo.title} repo={repo}></Repo>
        })
      }
    </div>
  );
}
