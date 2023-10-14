require "csv" # CSVファイルを扱うためのライブラリを読み込んでいます

puts "1 → 新規でメモを作成する / 2 → 既存のメモを編集する"

memo_type = gets.to_i # ユーザーの入力値を取得し、数字へ変換しています

if memo_type == 1

    puts "拡張子を除いたファイルを入力してください"
    file_name = gets.chomp
    
    puts "メモの内容を記入してください"
    puts "完了したらCtrl ＋ Dをおします"
    memo = $stdin.read
    
    CSV.open("#{file_name}.csv","w") do |test|
     test << [memo]
    end
    
    
    puts "メモが作成されました"

elsif memo_type == 2
    puts "編集するファイルを入力してください"
    file_name = gets.chomp
    
    puts "メモの内容を編集してください"
    puts "完了したらCtrl ＋ Dをおします"
    memo = $stdin.read
    
    CSV.open("#{file_name}.csv","a") do |test|
    test << [memo]
end
else 
    puts "1か２を選んでください"
  end
