import { useState, useEffect } from 'react'

import API from '../API'
import { isPersistedState } from '../helpers'

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true)
        setError(false)

        const movie = await API.fetchMovie(movieId)
        const credits = await API.fetchCredits(movieId)
        // get directors from the crew (from credits)
        const directors = credits.crew.filter(
          (person) => person.job === 'Director'
        )
        setState({
          ...movie,
          actors: credits.cast,
          directors,
        })
        setLoading(false)
      } catch (error) {
        setError(true)
      }
    }
    const sessionState = isPersistedState(movieId)

    if (sessionState) {
      setState(sessionState)
      setLoading(false)
      return
    }

    fetchMovie()
  }, [movieId])

  // writing to session storage
  useEffect(() => {
    sessionStorage.setItem(movieId, JSON.stringify(state))
  }, [movieId, state])

  return { state, loading, error }
}
