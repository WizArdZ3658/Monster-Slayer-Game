new Vue({
	el: '#app',
	data: {
		toggle_ctrls: false,
		my_health: 100,
		monster_health: 100,
		no_of_heals: 0,
		result: [] 
	},
	methods: {
		StartGame : function(){
			this.toggle_ctrls = !this.toggle_ctrls
			this.my_health = 100
			this.monster_health = 100
			this.no_of_heals = 0
			this.result.length = 0
		},
		AttackOp : function(){
			if (this.monster_health<20) {
				alert("You've killed the monster !")
				this.StartGame()
				return
			}
			if (this.my_health<20) {
				alert("You lost")
				this.StartGame()
				return
			}
			var damage1 = Math.round((Math.random() * 5) + 5)
			var damage2 = Math.round((Math.random() * 5) + 5)
			this.my_health -= damage1
			this.monster_health -= damage2
			this.result.unshift({
				isPlayer: true,
				text: 'Player hits Monster for ' + damage2
			})
			this.result.unshift({
				isPlayer: false,
				text: 'Monster hits Player for ' + damage1
			})
			this.no_of_heals = 0		
		},
		SpecialAttackOp : function(){
			if (this.monster_health<20) {
				alert("You've killed the monster !")
				this.StartGame()
				return
			}
			if (this.my_health<20) {
				alert("You lost")
				this.StartGame()
				return
			}
			var damage1 = Math.round((Math.random() * 5) + 5)
			var damage2 = Math.round((Math.random() * 5) + 15)
			this.my_health -= damage1
			this.monster_health -= damage2
			this.result.unshift({
				isPlayer: true,
				text: 'Player hits Monster for ' + damage2
			})
			this.result.unshift({
				isPlayer: false,
				text: 'Monster hits Player for ' + damage1
			})
			this.no_of_heals = 0
		},
		HealOp : function(){
			if (this.no_of_heals<7 && this.my_health<=95) {
				this.no_of_heals++
				this.my_health += 5
				this.result.unshift({
					isPlayer: true,
					text: 'Player heals himself'
				})
			}
		},
		GiveUpOp : function(){
			this.StartGame()
		}
	}
})