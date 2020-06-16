## Pokémon GO IV Table Generator Ver 1.5.6

This app lets you create an IV table for any Pokémon. Try it out here: https://csimbulan.github.io/ivtable

To use it, start typing a Pokémon species or number in the text bar. A dropdown menu will appear allowing you to select a species.

A table will automatically be generated. You can choose the following settings:

### Sort Settings

- Sort by CP at the encounter level. in descending order. If two CPs are equal then it will next sort by CP at highest level shown, followed by IV percentage.
- Sort by IV percentage in descending order. If two IVs are equal then it will next sort by CP at the encounter level, follow by CP at the highest level shown.
- Sort by ATK IV in descending order. If two ATK IVs are equal then it will next sort by IV percentage, followed by CP at the highest level shown.

### Toggle Settings

- Nundo: this will show the stats for an IV percentage of 66.7% (10/10/10), which the lowest you can get from a raid / egg hatch. If this setting is toggled ON then it will show even if the Under 90 setting is OFF.
- Under 90%: this will show all combinations of thats from 66.7% (10/10/10) to 100% (15/15/15). The nundo stats will show even if this setting is OFF.
- Colored rows: this will toggle ON/OFF the coloring of table rows.

### Encounter Level

- Select what level to show the CP for. The indicated level + 5 will also be shown for weather boosts. Note that certain encounters such as from a research task cannot be weather boosted.

### CP Filter

- Show Only CP: the table will only show IV combinations that produce a CP matched with the value entered here.

### Highest Level

- Select which level the last two columns will show CP and HP for.

### Export As CSV File

This button will export the table data to a csv file. Note that all the values will be wrapped in double quotation marks. This is how the library used to export does it. There is supposed to be a way to remove the quotes but it does not seem to be working.

### Reset

Clears the table and resets all settings to default.
