export const App = () => {
  const ideas = [
    {
      nick: 'nick_1',
      name: 'Idea_1',
      description: 'Description of idea 1 ...',
    },
    {
      nick: 'nick_2',
      name: 'Idea_2',
      description: 'Description of idea 2 ...',
    },
    {
      nick: 'nick_3',
      name: 'Idea_3',
      description: 'Description of idea 3 ...',
    },
    {
      nick: 'nick_4',
      name: 'Idea_4',
      description: 'Description of idea 4 ...',
    },
    {
      nick: 'nick_5',
      name: 'Idea_5',
      description: 'Description of idea 5 ...',
    },
  ]
  return (
    <div>
      <h1>IdeaTitle</h1>
      {ideas.map((idea) => {
        return (
          <div key={idea.nick}>
            <h2>{idea.name}</h2>
            <p>{idea.description}</p>
          </div>
        )
      })}
    </div>
  )
}
