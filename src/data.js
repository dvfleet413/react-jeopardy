const questions = [
    //First Round
    {id: 1, answered: false, dailyDouble: false, category: 'Category 1', value: '$200', answer: 'Answer 1'},
    {id: 2, answered: false, dailyDouble: false, category: 'Category 1', value: '$400', answer: 'Answer 2'},
    {id: 3, answered: false, dailyDouble: false, category: 'Category 1', value: '$600', answer: 'Answer 3'},
    {id: 4, answered: false, dailyDouble: false, category: 'Category 1', value: '$800', answer: 'Answer 4'},
    {id: 5, answered: false, dailyDouble: true, category: 'Category 1', value: '$1000', answer: 'Answer 5'},
    
    {id: 6, answered: false, dailyDouble: false, category: 'Category 2', value: '$200', answer: 'Answer 1'},
    {id: 7, answered: false, dailyDouble: false, category: 'Category 2', value: '$400', answer: 'Answer 2'},
    {id: 8, answered: false, dailyDouble: false, category: 'Category 2', value: '$600', answer: 'Answer 3'},
    {id: 9, answered: false, dailyDouble: false, category: 'Category 2', value: '$800', answer: 'Answer 4'},
    {id: 10, answered: false, dailyDouble: false, category: 'Category 2', value: '$1000', answer: 'Answer 5'},
    
    {id: 11, answered: false, dailyDouble: false, category: 'Category 3', value: '$200', answer: 'Answer 1'},
    {id: 12, answered: false, dailyDouble: false, category: 'Category 3', value: '$400', answer: 'Answer 2'},
    {id: 13, answered: false, dailyDouble: false, category: 'Category 3', value: '$600', answer: 'Answer 3'},
    {id: 14, answered: false, dailyDouble: false, category: 'Category 3', value: '$800', answer: 'Answer 4'},
    {id: 15, answered: false, dailyDouble: false, category: 'Category 3', value: '$1000', answer: 'Answer 5'},
    
    {id: 16, answered: false, dailyDouble: false, category: 'Category 4', value: '$200', answer: 'Answer 1'},
    {id: 17, answered: false, dailyDouble: false, category: 'Category 4', value: '$400', answer: 'Answer 2'},
    {id: 18, answered: false, dailyDouble: false, category: 'Category 4', value: '$600', answer: 'Answer 3'},
    {id: 19, answered: false, dailyDouble: false, category: 'Category 4', value: '$800', answer: 'Answer 4'},
    {id: 20, answered: false, dailyDouble: false, category: 'Category 4', value: '$1000', answer: 'Answer 5'},
    
    {id: 21, answered: false, dailyDouble: false, category: 'Category 5', value: '$200', answer: 'Answer 1'},
    {id: 22, answered: false, dailyDouble: false, category: 'Category 5', value: '$400', answer: 'Answer 2'},
    {id: 23, answered: false, dailyDouble: false, category: 'Category 5', value: '$600', answer: 'Answer 3'},
    {id: 24, answered: false, dailyDouble: false, category: 'Category 5', value: '$800', answer: 'Answer 4'},
    {id: 25, answered: false, dailyDouble: false, category: 'Category 5', value: '$1000', answer: 'Answer 5'},
    
    {id: 26, answered: false, dailyDouble: false, category: 'Category 6', value: '$200', answer: 'Answer 1'},
    {id: 27, answered: false, dailyDouble: false, category: 'Category 6', value: '$400', answer: 'Answer 2'},
    {id: 28, answered: false, dailyDouble: false, category: 'Category 6', value: '$600', answer: 'Answer 3'},
    {id: 29, answered: false, dailyDouble: false, category: 'Category 6', value: '$800', answer: 'Answer 4'},
    {id: 30, answered: false, dailyDouble: false, category: 'Category 6', value: '$1000', answer: 'Answer 5'},
    
    //Second Round
    {id: 31, answered: false, dailyDouble: false, category: 'Category 1', value: '$400', answer: 'Answer 1'},
    {id: 32, answered: false, dailyDouble: false, category: 'Category 1', value: '$800', answer: 'Answer 2'},
    {id: 33, answered: false, dailyDouble: false, category: 'Category 1', value: '$1200', answer: 'Answer 3'},
    {id: 34, answered: false, dailyDouble: false, category: 'Category 1', value: '$1600', answer: 'Answer 4'},
    {id: 35, answered: false, dailyDouble: false, category: 'Category 1', value: '$2000', answer: 'Answer 5'},
    
    {id: 36, answered: false, dailyDouble: false, category: 'Category 2', value: '$400', answer: 'Answer 1'},
    {id: 37, answered: false, dailyDouble: false, category: 'Category 2', value: '$800', answer: 'Answer 2'},
    {id: 38, answered: false, dailyDouble: false, category: 'Category 2', value: '$1200', answer: 'Answer 3'},
    {id: 39, answered: false, dailyDouble: true, category: 'Category 2', value: '$1600', answer: 'Answer 4'},
    {id: 40, answered: false, dailyDouble: false, category: 'Category 2', value: '$2000', answer: 'Answer 5'},
    
    {id: 41, answered: false, dailyDouble: false, category: 'Category 3', value: '$400', answer: 'Answer 1'},
    {id: 42, answered: false, dailyDouble: false, category: 'Category 3', value: '$800', answer: 'Answer 2'},
    {id: 43, answered: false, dailyDouble: false, category: 'Category 3', value: '$1200', answer: 'Answer 3'},
    {id: 44, answered: false, dailyDouble: false, category: 'Category 3', value: '$1600', answer: 'Answer 4'},
    {id: 45, answered: false, dailyDouble: false, category: 'Category 3', value: '$2000', answer: 'Answer 5'},
    
    {id: 46, answered: false, dailyDouble: false, category: 'Category 4', value: '$400', answer: 'Answer 1'},
    {id: 47, answered: false, dailyDouble: false, category: 'Category 4', value: '$800', answer: 'Answer 2'},
    {id: 48, answered: false, dailyDouble: false, category: 'Category 4', value: '$1200', answer: 'Answer 3'},
    {id: 49, answered: false, dailyDouble: false, category: 'Category 4', value: '$1600', answer: 'Answer 4'},
    {id: 50, answered: false, dailyDouble: true, category: 'Category 4', value: '$2000', answer: 'Answer 5'},
    
    {id: 51, answered: false, dailyDouble: false, category: 'Category 5', value: '$400', answer: 'Answer 1'},
    {id: 52, answered: false, dailyDouble: false, category: 'Category 5', value: '$800', answer: 'Answes 2'},
    {id: 53, answered: false, dailyDouble: false, category: 'Category 5', value: '$1200', answer: 'Answer 3'},
    {id: 54, answered: false, dailyDouble: false, category: 'Category 5', value: '$1600', answer: 'Answer 4'},
    {id: 55, answered: false, dailyDouble: false, category: 'Category 5', value: '$2000', answer: 'Answer 5'},
    
    {id: 56, answered: false, dailyDouble: false, category: 'Category 6', value: '$400', answer: 'Answer 1'},
    {id: 57, answered: false, dailyDouble: false, category: 'Category 6', value: '$800', answer: 'Answer 2'},
    {id: 58, answered: false, dailyDouble: false, category: 'Category 6', value: '$1200', answer: 'Answer 3'},
    {id: 59, answered: false, dailyDouble: false, category: 'Category 6', value: '$1600', answer: 'Answer 4'},
    {id: 60, answered: false, dailyDouble: false, category: 'Category 6', value: '$2000', answer: 'Answer 5'},
    
    //Final Jeopardy
    {id: 61, category: 'Final Jeopardy Category', answer: 'Final Jeopardy Answer'}
]


export default questions