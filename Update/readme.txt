$root = "C:\NEC\Kit\"
$BASC = Get-Content "C:\Users\james.w.brown.ctr\Downloads\BASC_Final_Rank.json" | ConvertFrom-Json

$count = 1

$BASC | %{

    $number = $_.edition 
    $finalname = [string]$number + ".png"    
    $trait_fur = $_.FUR + ".png"    
    $trait_clothes = $_.CLOTHES + ".png"    
    $trait_eyes = $_.EYES + ".png"    
    $trait_mouth = $_.MOUTH + ".png"    
    $trait_hats = $_.HATS + ".png"    
    $trait_earring = $_.EARRING + ".png"    

    $Background = $root+"BACKGROUND\Solana.png"
    $FUR = $root+"FUR\"+$trait_fur
    $CLOTHES = $root+"CLOTHES\"+$trait_clothes
    $EYES = $root+"EYES\"+$trait_eyes
    $MOUTH = $root+"MOUTH\"+$trait_mouth
    $HATS = $root+"HATS\"+$trait_hats
    $EARRING = $root+"EARRING\"+$trait_earring
    $newfile = $root+"Collection\$finalname"

    $image1 = [system.drawing.image]::FromFile($Background)
    $image2 = [system.drawing.image]::FromFile($FUR)
    $image3 = [system.drawing.image]::FromFile($CLOTHES)
    $image4 = [system.drawing.image]::FromFile($EYES)
    $image5 = [system.drawing.image]::FromFile($MOUTH)
    $image6 = [system.drawing.image]::FromFile($HATS)
    $image7 = [system.drawing.image]::FromFile($EARRING)

    $graphics = [system.drawing.Graphics]::FromImage($image1)

    $graphics.DrawImage($image2, 0,0)
    $graphics.DrawImage($image3, 0,0)
    $graphics.DrawImage($image4, 0,0)
    $graphics.DrawImage($image5, 0,0)
    $graphics.DrawImage($image6, 0,0)
    $graphics.DrawImage($image7, 0,0)

    $image1.Save($newfile)

    $image1.Dispose()
    $image2.Dispose()
    $image3.Dispose()
    $image4.Dispose()
    $image5.Dispose()
    $image6.Dispose()
    $image7.Dispose()
    $graphics.Dispose()

    Write-Host $count
    $count++
}
