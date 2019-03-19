import Foundation

extension Array where Element: Hashable {
    func difference(from other: [Element]) -> [Element] {
        let thisSet = Set(self)
        let otherSet = Set(other)
        return Array(thisSet.symmetricDifference(otherSet))
    }
}

let regexPattern = "^-?(\\d+|\\d?).?\\d+"
let matchOnlyOneDot = try NSRegularExpression(pattern: regexPattern, options: [])

let testCases: [String] = ["11", "8.0", "3", "-5", "0", "0.515322", "15.2", "15.2.4", "15.2..", "15.abc3", ".5", "0.5", "abc8.0", "-0.3", "-12.654", ".75", "-.75", "..75" ]
var passed: [String] = [];

func matches(for regex: String, in text: String) -> [String] {
    do {
        let regex = try NSRegularExpression(pattern: regex)
        let nsString = text as NSString
        let results = regex.matches(in: text, range: NSRange(location: 0, length: nsString.length))
        let resMap = results.map { nsString.substring(with: $0.range) }
        passed += resMap
        return resMap
    } catch let error {
        print("invalid regex: \(error.localizedDescription)")
        return []
    }
}

for test in testCases {
  matches(for: regexPattern, in: test)
}

let failed: [String] = passed.difference(from: testCases)

print(passed)
print(failed)
