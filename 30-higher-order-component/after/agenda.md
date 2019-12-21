# Higher Order Components

1. Why inheritance doesn't work

2. Higher Order Component Template

    <WithClock [ticks]>
        <Clock [ticks]>
    </WithClock>


    <WithClock [ticks]>
        <NewsTicker [ticks]>
    </WithClock>


3. Implement withTimer Higher Order Component
function withClock(Component) {
    return class WithClock extends React.Component {

        render() {
            return <Component {...this.props} />
        }
    }
}