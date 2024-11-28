export default class EventDetails {
  constructor(
    matchDate = 'To Be Announced',
    startTime = 'null',
    stadium = null,
    homeTeam = 'Unknown',
    awayTeam = 'Unknown',
    stageOfCompetetion = null,
    nameOfCompetetion = null,
    countryOfHomeTeam = 'Unknown',
    countryOfAwayTeam = 'Unknown',
  ) {
    this.matchDate = matchDate
    this.startTime = startTime
    this.stadium = stadium
    this.homeTeam = homeTeam
    this.awayTeam = awayTeam
    this.stageOfCompetetion = stageOfCompetetion
    this.nameOfCompetetion = nameOfCompetetion
    this.countryOfHomeTeam = countryOfHomeTeam
    this.countryOfAwayTeam = countryOfAwayTeam
  }
}
